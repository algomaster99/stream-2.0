from django.shortcuts import render
from users.serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework.response import Response

# Create your views here.

class CreateUserView(generics.CreateAPIView): #Provides only POST Method
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    
    def get(self, request, username):
        user = get_user_model().objects.get(username=username) 
        serializer = UserSerializer(user)
        return Response(serializer.data)
        
