// @flow

function nowPath(d: Date = new Date): string {
  return `${d.getFullYear()}/${d.getMonth()}/${d.getDay()}`;
}

export default function createDefaultContainer(id: string): Thing {
  return {
    'id':   id,
    'type': 'ThrumeContainer'
  }
}