from django.shortcuts import render
from users.serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth import get_user_model

# Create your views here.

class CreateUserView(generics.CreateAPIView): #Provides only POST Method
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
