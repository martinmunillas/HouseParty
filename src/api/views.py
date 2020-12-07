from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .models import Room
from.serializer import RoomSerializer, CreateRoomSerializer


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class GetRoom(APIView):
    serializer_class = RoomSerializer
    lookup_url_kwarg = 'code'

    def get(self, request, format=None):
        code = request.GET.get(self.lookup_url_kwarg)
        if(code != None):
            room = Room.objects.filter(code=code)
            if(len(room) > 0):
                data = RoomSerializer(room[0]).data
                data['is_host'] = self.request.session.session_key == room[0].host
                return Response(data, status=status.HTTP_200_OK)
            return Response('Bad Request: Invalid Room Code', status=status.HTTP_404_NOT_FOUND)
        return Response('Bad Request: Code parameter not found', status=status.HTTP_400_BAD_REQUEST)


class JoinRoomView(APIView):
    lookup_url_kwarg = 'code'

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        code = request.data.get(self.lookup_url_kwarg)
        if code != None:
            room = Room.objects.filter(code=code)[0]
            if room:
                self.request.session['room_code'] = code
                return Response(status=status.HTTP_200_OK)
            return Response('Bad Request: Invalid Room Code', status=status.HTTP_404_NOT_FOUND)
        return Response('Bad Request: Invalid Room Code HEllo', status=status.HTTP_404_NOT_FOUND)
        


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=('guest_can_pause', 'votes_to_skip'))
                self.request.session['room_code'] = room.code
            else:
                room = Room(host=host, votes_to_skip=votes_to_skip,
                            guest_can_pause=guest_can_pause)
                room.save()

            return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)


class UserInRoom (APIView):
    def get(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        data = {
            'code': self.request.session.get('room_code')
        }
        return JsonResponse(data, status=status.HTTP_200_OK)


class LeaveRoom(APIView):
    def post(self, request, format=None):
        if 'room_code' in self.request.session:
            self.request.session.pop('room_code')
            rooms = Room.objects.filter(host=self.request.session.session_key)
            if len(rooms):
                room = rooms[0]
                room.delete()
        return Response(status=status.HTTP_200_OK)