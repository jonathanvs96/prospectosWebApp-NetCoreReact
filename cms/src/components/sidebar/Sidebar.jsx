import React from "react";

export default function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link">
        <span className="brand-text font-weight-light">Proyecto Eval.</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <a href="/" className="d-block">
              Promotor
            </a>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>Prospectos</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
