from django.urls import path
from .views import index

urlpatterns = [
    path('', index, {'resource': ''}),
    path('<path:resource>', index)
]