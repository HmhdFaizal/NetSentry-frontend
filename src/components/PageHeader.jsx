import React from "react";
export default function PageHeader({ title, description, children }) {
  return <div className="page-heading"><div><h1>{title}</h1>{description && <p>{description}</p>}</div>{children && <div className="page-heading-actions">{children}</div>}</div>;
}
