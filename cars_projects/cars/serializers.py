from rest_framework import serializers
from.models import Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'name', 'description', 'price']

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['name', 'price', 'description']  # add other fields as necessary