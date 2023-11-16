import Link from "next/link";

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb-nav mb-10 pb-1">
      <div className="container">
        <ul className="breadcrumb">
          <li>
            <Link href="/">خانه </Link>
          </li>
          <li>ارتباط با ما</li>
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
