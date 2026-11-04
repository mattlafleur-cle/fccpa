import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { toast, Toaster } from 'sonner';
import { 
  LogOut, 
  Search, 
  Trash2, 
  Mail, 
  MailOpen,
  Loader2
} from 'lucide-react';
import { useAdminAuth } from '@/context/AdminAuthContext.jsx';
import pb from '@/lib/pocketbaseClient.js';

import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";

const AdminDashboard = () => {
  const { logout, adminUser } = useAdminAuth();
  
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [practiceFilter, setPracticeFilter] = useState('All');
  
  // Dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [inquiryToDelete, setInquiryToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const records = await pb.collection('inquiries').getFullList({
        sort: '-created',
        $autoCancel: false
      });
      setInquiries(records);
    } catch (error) {
      console.error('Failed to fetch inquiries:', error);
      toast.error('Failed to load inquiries. Please refresh the page.');
    } finally {
      setLoading(false);
    }
  };

  const toggleReadStatus = async (id, currentStatus) => {
    try {
      // Optimistic UI update
      setInquiries(prev => prev.map(inq => 
        inq.id === id ? { ...inq, read: !currentStatus } : inq
      ));
      
      await pb.collection('inquiries').update(id, {
        read: !currentStatus
      }, { $autoCancel: false });
      
    } catch (error) {
      console.error('Failed to update read status:', error);
      toast.error('Failed to update status.');
      // Revert on error
      fetchInquiries();
    }
  };

  const openDeleteDialog = (id) => {
    setInquiryToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!inquiryToDelete) return;
    
    setIsDeleting(true);
    try {
      await pb.collection('inquiries').delete(inquiryToDelete, { $autoCancel: false });
      setInquiries(prev => prev.filter(inq => inq.id !== inquiryToDelete));
      toast.success('Inquiry deleted successfully.');
    } catch (error) {
      console.error('Failed to delete inquiry:', error);
      toast.error('Failed to delete inquiry.');
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setInquiryToDelete(null);
    }
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = 
      inq.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      inq.email.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesPractice = practiceFilter === 'All' || inq.practiceArea === practiceFilter;
    
    return matchesSearch && matchesPractice;
  });

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Forest City</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Toaster position="top-right" />
      
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
        {/* Header */}
        <header className="bg-[#0F1820] text-white px-6 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-4">
            <h1 className="serif-heading text-2xl tracking-wide">Forest City</h1>
            <span className="hidden sm:inline-block border-l border-white/20 pl-4 text-white/70 text-sm uppercase tracking-widest font-medium">
              Admin Dashboard
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="hidden md:inline-block text-sm text-white/70">
              {adminUser?.email}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={logout}
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[#0F1820]">Inquiries</h2>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-white border-border/60 text-[#0F1820] focus-visible:ring-[#477956]"
                />
              </div>
              
              <div className="w-full sm:w-48">
                <Select value={practiceFilter} onValueChange={setPracticeFilter}>
                  <SelectTrigger className="bg-white border-border/60 text-[#0F1820] focus:ring-[#477956]">
                    <SelectValue placeholder="Filter by Practice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Practices</SelectItem>
                    <SelectItem value="Forest City AI">Forest City AI</SelectItem>
                    <SelectItem value="Forest City CPA">Forest City CPA</SelectItem>
                    <SelectItem value="Forest City Advisory">Forest City Advisory</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-md border border-border/60 shadow-sm overflow-hidden">
            {loading ? (
              <div className="flex flex-col items-center justify-center p-20 text-muted-foreground">
                <Loader2 className="w-8 h-8 animate-spin mb-4 text-[#477956]" />
                <p>Loading inquiries...</p>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-20 text-muted-foreground">
                <MailOpen className="w-12 h-12 mb-4 opacity-20" />
                <p className="text-lg font-medium text-[#0F1820]">No inquiries found</p>
                <p className="text-sm">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-[#FAFAFA]">
                    <TableRow>
                      <TableHead className="w-[50px]"></TableHead>
                      <TableHead className="font-semibold text-[#0F1820]">Name & Contact</TableHead>
                      <TableHead className="font-semibold text-[#0F1820]">Practice Area</TableHead>
                      <TableHead className="font-semibold text-[#0F1820] max-w-md">Message</TableHead>
                      <TableHead className="font-semibold text-[#0F1820]">Received</TableHead>
                      <TableHead className="text-right font-semibold text-[#0F1820]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInquiries.map((inquiry) => (
                      <TableRow 
                        key={inquiry.id} 
                        className={`transition-colors hover:bg-muted/50 ${!inquiry.read ? 'bg-[#477956]/[0.03]' : ''}`}
                      >
                        <TableCell>
                          <button 
                            onClick={() => toggleReadStatus(inquiry.id, inquiry.read)}
                            className="p-2 rounded-full hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#477956]"
                            title={inquiry.read ? "Mark as unread" : "Mark as read"}
                          >
                            {inquiry.read ? (
                              <MailOpen className="w-5 h-5 text-muted-foreground/60" />
                            ) : (
                              <Mail className="w-5 h-5 text-[#477956]" fill="currentColor" fillOpacity="0.1" />
                            )}
                          </button>
                        </TableCell>
                        <TableCell>
                          <div className={`font-medium ${!inquiry.read ? 'text-[#0F1820]' : 'text-muted-foreground'}`}>
                            {inquiry.fullName}
                          </div>
                          <div className="text-sm text-muted-foreground/80 mt-1 flex flex-col gap-0.5">
                            <a href={`mailto:${inquiry.email}`} className="hover:text-[#477956] hover:underline">
                              {inquiry.email}
                            </a>
                            <a href={`tel:${inquiry.phone}`} className="hover:text-[#477956] hover:underline">
                              {inquiry.phone}
                            </a>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full 
                            ${inquiry.practiceArea === 'Forest City AI' ? 'bg-blue-100 text-blue-800' :
                              inquiry.practiceArea === 'Forest City CPA' ? 'bg-emerald-100 text-emerald-800' :
                              inquiry.practiceArea === 'Forest City Advisory' ? 'bg-amber-100 text-amber-800' :
                              'bg-gray-100 text-gray-800'}`}
                          >
                            {inquiry.practiceArea}
                          </span>
                        </TableCell>
                        <TableCell className="max-w-md">
                          <p className={`text-sm line-clamp-3 ${!inquiry.read ? 'text-[#0F1820] font-medium' : 'text-muted-foreground'}`}>
                            {inquiry.message}
                          </p>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                          {formatDate(inquiry.created)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => openDeleteDialog(inquiry.id)}
                            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[#0F1820]">Delete Inquiry</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this inquiry? This action cannot be undone and the data will be permanently removed.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 gap-2 sm:gap-0">
            <Button 
              variant="outline" 
              onClick={() => setDeleteDialogOpen(false)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={confirmDelete}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete Permanently'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminDashboard;