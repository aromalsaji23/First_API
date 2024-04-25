from django.contrib import admin
from django.urls import path, include
from cars.views import CarListView, CarDetailView

urlpatterns = [
    path('admin/', admin.site.urls),  # Include Django admin URLs
    path('', CarListView.as_view(), name='car_list'),
    path('cars/<int:pk>/', CarDetailView.as_view(), name='car_detail'),
]
