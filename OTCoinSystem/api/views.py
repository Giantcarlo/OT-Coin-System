from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets
from .serializers import ItemWalletSerializer, ItemSerializer, WalletSerializer
from .models import ItemWallet, Item, Wallet

# Create your views here.
def home(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class ItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Items to be viewed or edited.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemWalletViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Item Wallets to be viewed or edited.
    """
    queryset = ItemWallet.objects.all()
    serializer_class = ItemWalletSerializer

class WalletViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Wallets to be viewed or edited.
    """
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer