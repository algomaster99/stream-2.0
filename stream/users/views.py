from users.serializers import UserSerializer, UserPermitSerializer
from rest_framework import generics
from django.contrib.auth import get_user_model
from django.views import generic
from django.views.generic.edit import UpdateView
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import permissions
# Create your views here.


class CreateUserView(generics.CreateAPIView):  # Provides only POST Method
    permission_classes = (permissions.AllowAny,)
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):

    queryset = get_user_model().objects.all()
    serializer_class = UserPermitSerializer

    def get(self, request, pk):
        user = get_user_model().objects.get(pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

class AdminView(generic.ListView):
    model = get_user_model()
    fields = ['first_name', 'username', 'is_active']
    template_name = 'users/admin.html'
