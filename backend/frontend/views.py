from django.shortcuts import render

def index(request, *arg, **kwargs):
    return render(request, 'frontend/index.html')
