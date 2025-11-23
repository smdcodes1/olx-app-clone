from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import UploadedPost
from .serializers import UploadedPostSerializer
from rest_framework import status
# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get(self, request):
        user = request.user
        return Response({
            "id": user.id,
            "username": user.username,
            "email": user.email,

        })
    
# class UploadPostView(generics.CreateAPIView):
#     queryset = UploadedPost.objects.all()
#     serializer_class = UploadedPostSerializer
    
class UploadPostView(generics.CreateAPIView):
    queryset = UploadedPost.objects.all()
    serializer_class = UploadedPostSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        print("REQUEST DATA =", request.data)
        # return super().post(request, *args, **kwargs)
        serializer = UploadedPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

class UploadedPostsListView(generics.ListAPIView):
    queryset = UploadedPost.objects.all().order_by("-created_at")
    serializer_class = UploadedPostSerializer
    permission_classes = [AllowAny]