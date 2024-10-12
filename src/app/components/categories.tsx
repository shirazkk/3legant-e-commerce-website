import Link from "next/link";

interface CategoriesLinksProps {
  product: string;
}

export default function CategoriesLinks({ product }: CategoriesLinksProps) {
  return (
    <div>
      <div className="flex text-customGrayBlue hover:underline hover:text-black font-semibold underline-offset-4 py-1">
        <Link href="#">{product}</Link>
      </div>
    </div>
  );
}
