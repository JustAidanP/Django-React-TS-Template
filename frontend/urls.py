from django.urls import re_path

from . import views

urlpatterns = [
    re_path(r'^.*', views.frontend),
    re_path(r'^.*/$', views.frontend)
]
