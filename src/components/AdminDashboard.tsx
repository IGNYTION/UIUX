import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { 
  LayoutDashboard, 
  Package, 
  Download, 
  Users, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  TrendingUp
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function AdminDashboard() {
  const [versions, setVersions] = useState([
    { 
      id: '1', 
      version: '3.2.0', 
      releaseDate: '2025-11-15', 
      downloads: 1245, 
      status: 'published' 
    },
    { 
      id: '2', 
      version: '3.1.5', 
      releaseDate: '2025-10-20', 
      downloads: 3421, 
      status: 'published' 
    },
    { 
      id: '3', 
      version: '3.1.0-beta', 
      releaseDate: '2025-11-18', 
      downloads: 89, 
      status: 'draft' 
    },
  ]);

  const stats = [
    { 
      title: 'Total Downloads', 
      value: '12,450', 
      change: '+12.5%', 
      icon: <Download className="w-6 h-6 text-orange-600" /> 
    },
    { 
      title: 'Active Users', 
      value: '8,234', 
      change: '+8.2%', 
      icon: <Users className="w-6 h-6 text-orange-600" /> 
    },
    { 
      title: 'Published Versions', 
      value: '24', 
      change: '+2', 
      icon: <Package className="w-6 h-6 text-orange-600" /> 
    },
    { 
      title: 'Growth Rate', 
      value: '23.5%', 
      change: '+3.1%', 
      icon: <TrendingUp className="w-6 h-6 text-orange-600" /> 
    },
  ];

  const handlePublishVersion = (id: string) => {
    setVersions(versions.map(v => 
      v.id === id ? { ...v, status: 'published' } : v
    ));
    toast.success('Version published successfully!');
  };

  const handleDeleteVersion = (id: string) => {
    setVersions(versions.filter(v => v.id !== id));
    toast.success('Version deleted successfully!');
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <LayoutDashboard className="w-8 h-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
          </div>
          <p className="text-gray-600">
            Manage your software versions, content, and monitor performance
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">{stat.title}</span>
                  {stat.icon}
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <Badge className="bg-green-100 text-green-800">
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="versions" className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-4 mb-8">
            <TabsTrigger value="versions">Versions</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Version Management */}
          <TabsContent value="versions">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Manage Versions</CardTitle>
                    <CardDescription>
                      Create and manage software releases
                    </CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    New Version
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {versions.map((version) => (
                    <div 
                      key={version.id} 
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900">
                            Version {version.version}
                          </h3>
                          <Badge 
                            variant={version.status === 'published' ? 'default' : 'secondary'}
                            className={version.status === 'published' ? 'bg-green-500' : ''}
                          >
                            {version.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Released: {version.releaseDate}</span>
                          <span>•</span>
                          <span>{version.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        {version.status === 'draft' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handlePublishVersion(version.id)}
                          >
                            Publish
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteVersion(version.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>
                  Update homepage and marketing content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hero-title">Hero Section Title</Label>
                  <Input 
                    id="hero-title" 
                    defaultValue="Ignite Your Semiconductor Innovation"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-description">Hero Section Description</Label>
                  <Textarea 
                    id="hero-description" 
                    rows={3}
                    defaultValue="IGNYTION delivers powerful software solutions designed specifically for semiconductor industries."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feature-highlight">Feature Highlight</Label>
                  <Input 
                    id="feature-highlight" 
                    defaultValue="Advanced chip design automation"
                  />
                </div>
                <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  View and manage registered users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((user) => (
                    <div 
                      key={user} 
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white font-semibold">
                          U{user}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">User {user}</h3>
                          <p className="text-sm text-gray-600">user{user}@example.com</p>
                        </div>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure application settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="IGNYTION" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" defaultValue="contact@ignytion.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input id="support-email" defaultValue="support@ignytion.com" />
                </div>
                <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  Update Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
