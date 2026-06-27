'use client';

import { useState } from 'react';
import {
  Mail,
  Plus,
  ShieldCheck,
  Trash2,
  UserCheck,
  Users,
} from 'lucide-react';
import { users as seed } from '@/data/users';
import type { Role } from '@/types'; // <-- FIXED: Import Role type

export default function AdminUsersPage() {
  const [list, setList] = useState(seed);
  const [query, setQuery] = useState('');

  const filtered = list.filter((user) =>
    `${user.name} ${user.email} ${user.role}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="badge badge-ai mb-3">
            <Users className="h-3.5 w-3.5" />
            User Manager
          </div>

          <h1 className="text-3xl font-black text-[var(--text-strong)]">
            Users
          </h1>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Manage learners, admins, roles, and account access.
          </p>
        </div>

        <button type="button" className="btn btn-primary">
          <Plus className="h-4 w-4" />
          Invite User
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div className="card p-6">
          <Users className="h-6 w-6 text-primary-500" />
          <div className="mt-4 text-3xl font-black text-[var(--text-strong)]">
            {list.length}
          </div>
          <div className="text-sm font-bold text-[var(--text-muted)]">
            Total users
          </div>
        </div>

        <div className="card p-6">
          <ShieldCheck className="h-6 w-6 text-primary-500" />
          <div className="mt-4 text-3xl font-black text-[var(--text-strong)]">
            {list.filter((user) => user.role === 'Admin' || user.role === 'Super Admin').length} {/* <-- FIXED */}
          </div>
          <div className="text-sm font-bold text-[var(--text-muted)]">
            Admin users
          </div>
        </div>

        <div className="card p-6">
          <UserCheck className="h-6 w-6 text-primary-500" />
          <div className="mt-4 text-3xl font-black text-[var(--text-strong)]">
            {list.filter((user) => user.role === 'Student' || user.role === 'Pro Student').length} {/* <-- FIXED */}
          </div>
          <div className="text-sm font-bold text-[var(--text-muted)]">
            Learners
          </div>
        </div>
      </div>

      <div className="card p-4">
        <div className="relative">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search users..."
            className="input h-12"
          />
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
              <tr>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  User
                </th>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Role
                </th>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Status
                </th>
                <th className="p-4 text-right font-black text-[var(--text-strong)]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border)]">
              {filtered.map((user) => (
                <tr key={user.id} className="transition hover:bg-[var(--bg-subtle)]">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600 text-sm font-black text-white">
                        {user.name
                          .split(' ')
                          .map((part) => part[0])
                          .join('')
                          .slice(0, 2)}
                      </div>

                      <div>
                        <div className="font-black text-[var(--text-strong)]">
                          {user.name}
                        </div>

                        <div className="mt-1 flex items-center gap-1 text-xs font-bold text-[var(--text-muted)]">
                          <Mail className="h-3.5 w-3.5" />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className="badge border-primary-500/25 bg-primary-500/10 text-primary-500">
                      {user.role}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="badge border-success/25 bg-success/10 text-success">
                      Active
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          setList((current) =>
                            current.filter((item) => item.id !== user.id),
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-500"
                        aria-label="Delete user"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-10 text-center text-sm text-[var(--text-muted)]">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}