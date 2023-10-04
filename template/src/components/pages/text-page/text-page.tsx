import React from 'react';
import { WidgetZone, useZoneStore } from '@quantumart/qp8-widget-platform-bridge';
import { collapseProps } from 'src/utilities/collapse-props';
import { loadAppSettings } from 'src/app-settings/app-settings-context';
import { SecondayText } from './text-page.styles';

interface IStaticProps {
  title?: {
    value: string;
  };
  hidetitle?: {
    value: boolean;
  };
  text?: {
    value: string;
  };
}

interface IComponentProps {
  title?: string;
  hidetitle?: boolean;
  text?: string;
  welcomeText?: string;
}

export async function getStaticProps(
  originProps: IStaticProps,
  //environment: IStaticPropsEnvironment,
): Promise<IComponentProps> {
  const props = collapseProps(originProps);
  const settings = await loadAppSettings();
  return {
    title: props.title,
    hidetitle: props.hidetitle,
    text: props.text,
    welcomeText: settings?.welcomeText,
  };
}

const TextPage = (props: IComponentProps): JSX.Element => {
  const ZoneStore = useZoneStore();

  return (
    <>
      {/* {!props.hidetitle && <h1 className="text-page__title">{props.title}</h1>} */}
      <WidgetZone name="Content" />
      <ZoneStore.DynamicZone html={props.text ?? ''} />
      <SecondayText>{props.welcomeText}</SecondayText>
      <WidgetZone name="ContentBelow" />
    </>
  );
};

export default TextPage;
