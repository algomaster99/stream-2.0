from users.serializers import UserSerializer, UserPermitSerializer
from rest_framework import generics
from django.contrib.auth import get_user_model
from django.views import generic
from django.views.generic.edit import UpdateView
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import permissions
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
# Create your views here.

class AdminStaffRequiredMixin(LoginRequiredMixin, UserPassesTestMixin):

    login_url = '/admin/login/?next=/admin/'
    
    def test_func(self):
        return self.request.user.is_superuser or self.request.user.is_staff

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

class AdminView(AdminStaffRequiredMixin, generic.ListView):
    model = get_user_model()
    fields = ['first_name', 'username', 'is_active']
    template_name = 'users/admin.html'

class AdminUpdateView(AdminStaffRequiredMixin, UpdateView):
    model = get_user_model()
    fields = ['is_active']
    template_name = 'users/user_update.html'
    success_url = reverse_lazy('users:admin')
