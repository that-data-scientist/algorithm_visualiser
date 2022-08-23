import React from 'react';
import { MarkerType } from 'react-flow-renderer';

export const nodes = [
  {
    id: '1',
    type: 'input',
    data: {label: 'Node id: 1'},
    position: { x: 250, y: 0 },
    style: {
          background: '#D6D5E6',
          color: '#333',
          border: '1px solid #222138',
          width: 180,
        },
  },
  {
    id: '2',
    data: {label: 'Node id: 2'},
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: {label: 'Node id: 3'},
    position: { x: 400, y: 100 }
  },
  {
    id: '4',
    position: { x: 250, y: 200 },
    data: {label: 'Node id: 4'},
  },
  {
    id: '5',
    data: {label: 'Node id: 5'},
    position: { x: 250, y: 325 },
  },
  {
    id: '6',
    type: 'output',
     data: {label: 'Node id: 6'},
    position: { x: 100, y: 480 },
  },
  {
    id: '7',
    type: 'output',
    data: {label: 'Node id: 7'},
    position: { x: 400, y: 480 },
  },
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2' },
];
