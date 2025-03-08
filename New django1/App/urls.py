from django.contrib import admin
from django.urls import path 
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.display, name='display'),
    path('home/', views.Home, name='home'),
    path('create/', views.create, name='create'),
    path('adit/<int:post>/', views.adit, name='adit'),
    path('delete/<int:post>/', views.delete, name='delete'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

