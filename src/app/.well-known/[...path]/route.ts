import { NextRequest, NextResponse } from 'next/server'


export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
): Promise<NextResponse> {
  const { path: pathArray } = await params
  const path = pathArray.join('/')

  if (path === 'microsoft-identity-association.json') {
    return NextResponse.json(
      {
        associatedApplications: [
          {
            applicationId: 'aa91c15c-9263-4926-baeb-945f2877bea0',
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}
