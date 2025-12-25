import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Users, 
  Download, 
  Eye, 
  TrendingUp, 
  Globe,
  FileText,
  Lock,
  BarChart3,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      toast.success('Successfully logged in!');
    } else {
      toast.error('Invalid credentials');
    }
  };

  const stats = [
    { label: 'Total Visitors', value: '12,543', change: '+12.5%', icon: <Users className="w-6 h-6" /> },
    { label: 'Downloads', value: '3,241', change: '+8.2%', icon: <Download className="w-6 h-6" /> },
    { label: 'Page Views', value: '45,832', change: '+15.3%', icon: <Eye className="w-6 h-6" /> },
    { label: 'Active Users', value: '892', change: '+5.7%', icon: <Activity className="w-6 h-6" /> },
  ];

  const pageViews = [
    { page: '/downloads', views: 15234, percentage: 33 },
    { page: '/', views: 12456, percentage: 27 },
    { page: '/platform', views: 8932, percentage: 20 },
    { page: '/pricing', views: 5421, percentage: 12 },
    { page: '/docs', views: 3789, percentage: 8 },
  ];

  const recentDownloads = [
    { version: '1.0.0', platform: 'Linux', count: 1543, date: '2025-12-25' },
    { version: '1.0.0', platform: 'macOS', count: 1298, date: '2025-12-25' },
    { version: '0.9.5', platform: 'Linux', count: 245, date: '2025-12-24' },
    { version: '0.9.5', platform: 'macOS', count: 155, date: '2025-12-24' },
  ];

  const topCountries = [
    { country: 'United States', visitors: 4532, flag: '🇺🇸' },
    { country: 'India', visitors: 2341, flag: '🇮🇳' },
    { country: 'United Kingdom', visitors: 1876, flag: '🇬🇧' },
    { country: 'Germany', visitors: 1234, flag: '🇩🇪' },
    { country: 'China', visitors: 987, flag: '🇨🇳' },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="w-full max-w-md border-gray-200">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h2 className="text-2xl mb-2 text-gray-900 text-center">Admin Login</h2>
              <p className="text-gray-600 text-center mb-6">
                Sign in to access analytics dashboard
              </p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Username</label>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="border-gray-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Password</label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="border-gray-300"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Sign In
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                Demo credentials: admin / admin
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Welcome back, Admin</p>
          </div>
          <Button
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="border-gray-300 text-gray-700"
          >
            Sign Out
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-700">{stat.icon}</div>
                    <span className="text-green-600 text-sm flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl mb-1 text-gray-900">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Page Views */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-5 h-5 text-gray-700 mr-2" />
                  <h3 className="text-xl text-gray-900">Top Pages</h3>
                </div>
                
                <div className="space-y-4">
                  {pageViews.map((page, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">{page.page}</span>
                        <span className="text-gray-900">{page.views.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${page.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Geographic Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Globe className="w-5 h-5 text-gray-700 mr-2" />
                  <h3 className="text-xl text-gray-900">Top Countries</h3>
                </div>
                
                <div className="space-y-4">
                  {topCountries.map((country, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="text-gray-700">{country.country}</span>
                      </div>
                      <span className="text-gray-900">{country.visitors.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Downloads Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <FileText className="w-5 h-5 text-gray-700 mr-2" />
                <h3 className="text-xl text-gray-900">Recent Downloads</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-700">Version</th>
                      <th className="text-left py-3 px-4 text-gray-700">Platform</th>
                      <th className="text-right py-3 px-4 text-gray-700">Downloads</th>
                      <th className="text-right py-3 px-4 text-gray-700">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentDownloads.map((download, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-900">{download.version}</td>
                        <td className="py-3 px-4 text-gray-700">{download.platform}</td>
                        <td className="py-3 px-4 text-right text-gray-900">{download.count}</td>
                        <td className="py-3 px-4 text-right text-gray-600">{download.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
