import { useState } from 'react';
import { BookmarkPlusIcon } from 'lucide-react';
import { useConversationTagsQuery } from '~/data-provider';
import { Button } from '~/components/ui';
import { BookmarkContext } from '~/Providers/BookmarkContext';
import { BookmarkEditDialog } from '~/components/Bookmarks';
import BookmarkTable from './BookmarkTable';
import { useLocalize } from '~/hooks';

const BookmarkPanel = () => {
  const localize = useLocalize();
  const { data } = useConversationTagsQuery();
  const [open, setOpen] = useState(false);

  return (
    <div className="h-auto max-w-full overflow-x-hidden">
      <BookmarkContext.Provider value={{ bookmarks: data || [] }}>
        <BookmarkTable />
        <div className="flex justify-between gap-2">
          <BookmarkEditDialog context="BookmarkPanel" open={open} setOpen={setOpen} />
          <Button variant="outline" className="w-full gap-2 text-sm" onClick={() => setOpen(!open)}>
            <BookmarkPlusIcon className="size-4" />
            <div className="break-all">{localize('com_ui_bookmarks_new')}</div>
          </Button>
        </div>
      </BookmarkContext.Provider>
    </div>
  );
};
export default BookmarkPanel;
