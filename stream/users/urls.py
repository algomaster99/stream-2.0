from django.urls import path, reverse
from users import views

app_name = 'users'

urlpatterns = [
    path('users/registration/', views.CreateUserView.as_view()),
    path('users/<int:pk>/', views.UserDetailView.as_view()),
    path('admin/', views.AdminView.as_view(), name='admin'),
    path('admin/<int:pk>/', views.AdminUpdateView.as_view(), name='permit'),
]
