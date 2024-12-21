import React from 'react';
import {
  Layout, Smartphone, Globe, BookOpen, School, Calendar, Settings,
  Tent, CreditCard, Palette, MessageCircle, Triangle, Users,
  Home, BarChart3, Share2, Contact
} from "lucide-react";

export const FEATURES_DATA = {
  Discover: [
    { icon: <Layout className="w-5 h-5" />, text: "Custom Branded website" },
    { icon: <Smartphone className="w-5 h-5" />, text: "User Mobile App" },
    { icon: <Globe className="w-5 h-5" />, text: "Business Webpage" },
  ],
  Manage: [
    { icon: <BookOpen className="w-5 h-5" />, text: "Courses" },
    { icon: <School className="w-5 h-5" />, text: "Classes" },
    { icon: <Calendar className="w-5 h-5" />, text: "Appointments" },
    { icon: <Settings className="w-5 h-5" />, text: "Services" },
    { icon: <Tent className="w-5 h-5" />, text: "Retreats" },
    { icon: <CreditCard className="w-5 h-5" />, text: "Payments" },
    { icon: <Palette className="w-5 h-5" />, text: "Design Tools" },
    { icon: <MessageCircle className="w-5 h-5" />, text: "Communication" },
    { icon: <Triangle className="w-5 h-5" />, text: "Trial Session" },
    { icon: <Users className="w-5 h-5" />, text: "Staff Roles" },
    { icon: <Home className="w-5 h-5" />, text: "Workshops" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Reporting tools" },
    { icon: <Globe className="w-5 h-5" />, text: "Multi-Location" },
    { icon: <Calendar className="w-5 h-5" />, text: "Events" },
  ],
  Grow: [
    { icon: <Settings className="w-5 h-5" />, text: "AI Marketing Tools" },
    { icon: <Share2 className="w-5 h-5" />, text: "Social Media Integration" },
    { icon: <Contact className="w-5 h-5" />, text: "CRM" },
  ],
};