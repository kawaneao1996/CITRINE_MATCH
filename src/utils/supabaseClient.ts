import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://sfjhnjthiyrjexayqpci.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmamhuanRoaXlyamV4YXlxcGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzODM2MDIsImV4cCI6MjAyNzk1OTYwMn0.SOBVY4Zdg8t2bBMjTkg7TWN-_lVAnbQF2UJKLrdOCL4",
);