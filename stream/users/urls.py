from django.urls import path
from users import views

urlpatterns = [
    path('users/registration/', views.CreateUserView.as_view()),
    path('users/<username>/', views.UserDetailView.as_view()),
]
