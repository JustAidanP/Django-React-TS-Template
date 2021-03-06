from django.urls import path, include
from rest_framework import routers
import backend.views as views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include(router.urls), name="api")
]
