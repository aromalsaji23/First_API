from django.contrib import admin
from .models import Car

class CarAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'get_description')  # Add 'get_description' to display description

    def get_description(self, obj):
        return obj.description
    
    get_description.short_description = 'Description'  # Customize the column header for description

admin.site.register(Car, CarAdmin)  # Register the CarAdmin class with the Car model in the admin site
