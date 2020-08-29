from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


# Create your views here.

def frontend(request: HttpRequest) -> HttpResponse:
    """
    Provides the reactive frontend
    """
    return render(request, "frontend/base.html", {})
