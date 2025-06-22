from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from .models import Post
from rest_framework.response import Response
from .serializers import PostSerializer
from rest_framework import status 


# Create your views here.



# def Home(req):
#     return HttpResponse('Hello World')


class api_view(APIView):
    
    def get(self, request, pk= None):
        # if pk is not None:
        #     post = Post.objects.get(pk=pk)
        #     serializers = PostSerializer(post)
        #     return Response(serializers.data, status=status.HTTP_200_OK)
        if pk:
            try:
                post = Post.objects.get(pk=pk)
            except:
                return Response( {'erro':'post not found'}, status=status.HTTP_400_BAD_REQUEST)
            else:
              serializers = PostSerializer(post)
              return Response(serializers.data, status=status.HTTP_200_OK)
        
        post=Post.objects.all()
        serializers = PostSerializer(post, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
    
    def post(self, request ):
        serializers = PostSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    
    def put(self, request, pk):
        try:
            post = Post.objects.get(pk=pk)
        except:
            return Response(status=status.HTTP_404_BAD_REQUEST)
        serializers = PostSerializer(post, data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=status.HTTP_202_ACCEPTED)
        return Response({'error': 'data not updated'}, status=status.HTTP_400_BAD_REQUEST)  

    def delete(self, request, pk):
        try:
            post = Post.objects.get(pk=pk)
        except:
            return Response(status=status.HTTP_404_BAD_REQUEST)
        post.delete()
        return Response(status=status.HTTP_200_OK) 

        