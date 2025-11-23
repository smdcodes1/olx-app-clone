
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UploadedPost

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password", "email"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user
    
class UploadedPostSerializer(serializers.ModelSerializer):
    user= UserSerializer(read_only=True)
    class Meta:
        model = UploadedPost
        fields = '__all__'
        # read_only_fields = ['user'] 
