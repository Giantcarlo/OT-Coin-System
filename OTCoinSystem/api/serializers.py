from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Wallet, Item, ItemWallet


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['url', 'item_name', 'description', 'price', 'item_wallet', 'availability' ]


class ItemWalletSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ItemWallet
        fields = ['url', 'totalContributed']

class WalletSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Wallet
        fields = ['url', 'amount', 'otHours']