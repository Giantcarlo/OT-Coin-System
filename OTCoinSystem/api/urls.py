from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'items', views.ItemViewSet)
router.register(r'wallets', views.WalletViewSet)
router.register(r'itemwallets', views.ItemWalletViewSet)


urlpatterns = [
    path('', include(router.urls))
]