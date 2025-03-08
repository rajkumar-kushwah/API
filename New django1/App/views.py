from django.shortcuts import render , redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib import messages
from .models import Post

# Create your views here.


def display(req):
    return render (req, 'base.html')

def Home(req):
    object = Post.objects.all()
    if req.method =='POST':
        post=Post()
        post.name = req.POST.get('name')
        post.description = req.POST.get('description')
        post.image = req.FILES.get('image')
        post.save()
        messages.success(req, 'Post created successfully!')
        return redirect('home')
        
    else:
        messages.error(req, 'error post ')
        return render(req, 'Home.html', {'object':object})
   
def create(req):
    object = Post.objects.all()
    if req.method =='POST':
        post=Post()
        post.name = req.POST.get('name')
        post.description = req.POST.get('description')
        post.image = req.FILES.get('image')
        post.save()
        messages.success(req, 'Post created successfully!')
        return redirect('create')
        
    else:
        messages.error(req, 'error post ')
        return render(req, 'create.html', {'object':object})
   




def adit( req, post):
    post = get_object_or_404(Post, id=post)
    if req.method == 'POST':
        post.name = req.POST.get('name')
        post.description = req.POST.get('description')
        post.image = req.FILES.get('image')
        post.save()
        messages.success(req, 'Post updated successfully!')
        return redirect('home')
    return render(req, 'create.html', {'post': post})

def delete(req, post):
    post = get_object_or_404 (Post, id=post)
    post.delete()
    messages.success(req, 'post deleted ')
    return redirect('Home')



    



    