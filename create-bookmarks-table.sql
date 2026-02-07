-- SQL to create the bookmarks table in Supabase
-- Run this in your Supabase SQL editor if you want to enable bookmarks functionality

CREATE TABLE IF NOT EXISTS public.bookmarks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL,
    companion_id UUID NOT NULL REFERENCES public.companions(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, companion_id)
);

-- Add Row Level Security (RLS)
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;

-- Create policy so users can only see their own bookmarks
CREATE POLICY "Users can view their own bookmarks" ON public.bookmarks
    FOR SELECT USING (auth.uid()::text = user_id);

-- Create policy so users can insert their own bookmarks
CREATE POLICY "Users can insert their own bookmarks" ON public.bookmarks
    FOR INSERT WITH CHECK (auth.uid()::text = user_id);

-- Create policy so users can delete their own bookmarks
CREATE POLICY "Users can delete their own bookmarks" ON public.bookmarks
    FOR DELETE USING (auth.uid()::text = user_id);

-- Optional: Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookmarks_user_id ON public.bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_companion_id ON public.bookmarks(companion_id);
