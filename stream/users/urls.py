from django.conf.urls import url
from users import views

urlpatterns = [
    url(r'^users/registration/$', views.CreateUserView.as_view())
]
