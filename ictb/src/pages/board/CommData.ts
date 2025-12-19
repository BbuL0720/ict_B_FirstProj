import React from 'react'

interface Comment {
	user: string;
	content: string;
	commDate: string;
	reip: string;
	sons: number;
	depth: number
}

export const CommData: Comment[] = [
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth: 0,
		sons: 0
	},
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth: 0,
		sons: 4
	},
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth:1,
		sons: 0
	},
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth:1,
		sons: 1
	},
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth:2,
		sons: 0
	},
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth:1,
		sons: 0
	},
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth:1,
		sons: 0
	},
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth: 0,
		sons: 1
	},
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth:1,
		sons: 0
	},
	{
		user: 'QWER',
		content: '대충 댓글 or 대댓글',
		commDate: '2025-12-25',
		reip: '192.168.0.17',
		depth: 0,
		sons: 0
	}
]