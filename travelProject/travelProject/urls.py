"""
URL configuration for travelProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from place import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', views.home, name="home"),
    path('search/', views.search, name="search"),
    path('select/<int:id>/', views.select, name="select"),
    path('store_safety_comment/', views.store_safety_comment, name="store_safety_comment"),
    path('store_safety/', views.store_safety, name="store_safety"),
    path('street_safety_comment/', views.street_safety_comment, name="street_safety_comment"),
    path('street_safety/', views.street_safety, name="street_safety"),
    path('detail_review/<int:id>/', views.detail_review, name="detail_review"),
    path('accounts/', include('accounts.urls', namespace='accounts')),
    # path('detail_c', views.detail_c, name = 'detail_c'),
    path('select_a/<int:id>', views.select_a, name = 'select_a'),
    path('select_c/<int:id>', views.select_c, name= 'select_c'),
    path('select_h/<int:id>', views.select_h, name= 'select_h'),

]
