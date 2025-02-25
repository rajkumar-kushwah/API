from django.contrib import admin
from django.urls import path 
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('' , views.display, name='dispaly'),
    path('Home/' , views.Home, name='Home'),                                                        
    path('create/' , views.create, name='create'),                                                        
    path('register/' , views.createUser, name='register'),
    path('login/' , views.Userlogin, name='login'),
    path('student/' , views.Student, name='student'),
    path('logout/' , views.Userlogout, name='logout'),
    path('edit/<int:post>/', views.adit, name='edit'),
    path('delete/<int:post>/', views.delete_post, name='delete'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
