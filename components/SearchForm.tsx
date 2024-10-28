
       'use client'


import Form from "next/form";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import SearchFormReset from './SearchFormReset';

export default function SearchForm({ query }: { query?: string }) {

  return (
    <Form action="/" scroll={false} 
    className="flex items-center space-x-2 w-full max-w-lg mx-auto">
        {/* onSubmit={handleSubmit} */}
      
    
      <div className="flex justify-center gap-2 relative flex-grow">
        <Input
          type="search"
          name="query"
          value={query}
          className="pr-10 w-full"
          placeholder="Rechercher des startups"
          aria-label="Rechercher des startups"
        />
        
                {query && <SearchFormReset />}

                <Button type="submit" className="search-btn">
                    <Search className="size-5" />
                </Button>
           
       </div>
    
    </Form>
  )
}
 
