import { ExtendedRecordMap, PageMap, PreviewImage as NotionPreviewImage } from 'notion-types'

export * from 'notion-types'

export interface PageError {
  message?: string
  statusCode: number
}

export interface PageProps {
  site?: Site
  recordMap?: ExtendedRecordMap
  pageId?: string
  error?: PageError
}

export interface Model {
  id: string
  userId: string

  createdAt: number
  updatedAt: number
}

export interface Site extends Model {
  name: string
  domain: string

  rootNotionPageId: string
  rootNotionSpaceId: string

  // settings
  html?: string
  fontFamily?: string
  darkMode?: boolean
  previewImages?: boolean

  // opengraph metadata
  description?: string
  image?: string

  timestamp: Date

  isDisabled: boolean
}

export interface SiteMap {
  site: Site
  pageMap: PageMap
  canonicalPageMap: CanonicalPageMap
}

export interface CanonicalPageMap {
  [canonicalPageId: string]: CanonicalPageData;
}

// All metadata (Notion Properties) goes here.
export interface CanonicalPageData {
  // uuid used by notion
  pageId: string
  // same as canonicalPageId
  slugName: string
  title: string
  createdTime: Date
  lastEditedTime: Date
  cover: [string, NotionPreviewImage] | null
}

export interface CanonicalPageDataSerialized {
  // raw page id from notion
  pageId: string
  // same as canonicalPageId
  slugName: string
  title: string
  createdTime: string
  lastEditedTime: string
  cover: [string, NotionPreviewImage] | null
}

export interface PageUrlOverridesMap {
  // maps from a URL path to the notion page id the page should be resolved to
  // (this overrides the built-in URL path generation for these pages)
  [pagePath: string]: string
}

export interface PageUrlOverridesInverseMap {
  // maps from a notion page id to the URL path the page should be resolved to
  // (this overrides the built-in URL path generation for these pages)
  [pageId: string]: string
}

export interface PreviewImage {
  url: string
  originalWidth: number
  originalHeight: number
  width: number
  height: number
  type: string
  dataURIBase64: string

  error?: string
  statusCode?: number
}

export interface PreviewImageMap {
  [url: string]: PreviewImage
}
