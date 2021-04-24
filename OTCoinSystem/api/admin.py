from django.contrib import admin

from .models import Item, ItemWallet, Wallet

# Register your models here.
admin.site.register(Item)
admin.site.register(ItemWallet)
admin.site.register(Wallet)