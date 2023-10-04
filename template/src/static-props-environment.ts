import { IGraphQLClient } from '@quantumart/qp8-widget-platform-bridge';

export interface SiteNode {
  nodeType?: string | null;
  children: SiteNode[];
}

export interface IStaticPropsEnvironment {
  href: string;
  graphQLClient: IGraphQLClient;
}
