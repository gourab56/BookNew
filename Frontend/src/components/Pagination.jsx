export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center mt-8 gap-4">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="font-medium">
        Page {page} of {totalPages}
      </span>
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
