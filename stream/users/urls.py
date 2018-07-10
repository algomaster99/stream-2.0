from django.urls import path
from users import views

urlpatterns = [
    path('users/registration/', views.CreateUserView.as_view()),
    path('users/<int:pk>/', views.UserDetailView.as_view(), name='permit'),
    path('admin/', views.AdminView.as_view()),
    # path('admin/<int:pk>/', views.AdminUpdateView.as_view(), name='permit'),
]
