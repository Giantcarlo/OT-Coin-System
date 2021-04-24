from django.db import models

# Create your models here.
class Wallet(models.Model):
    amount = models.FloatField()
    otHours = models.IntegerField()
    class Meta:
        def __str__(self):
            return 'Wallet'

class ItemWallet(Wallet):
    totalContributed = models.IntegerField()


class Item(models.Model):
    item_name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    price = models.FloatField(max_length=10)
    item_wallet = models.ForeignKey(ItemWallet, on_delete=models.CASCADE)
    availability = models.BooleanField()
    class Meta:
        def __str__(self):
            return f'{self.item_name}'
    