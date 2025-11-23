
from django.urls import path
from .views import UploadPostView,UploadedPostsListView

urlpatterns = [
    path('upload/', UploadPostView.as_view(), name='upload-post'),
    path("uploaded-posts/", UploadedPostsListView.as_view(), name="uploaded-posts"),

]