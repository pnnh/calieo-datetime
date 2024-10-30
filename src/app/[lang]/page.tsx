import React from 'react'
import './page.scss'
import {MainLayout} from "@/components/client/layout/main";
import {BaseRouterParams, SeoMeta} from "@/components/client/layout/root";
import {headers} from "next/headers";
import {useServerTranslation} from "@/services/server/i18n";
import DatetimeComponent from "@/components/client/datetime";

export default async function Home({params, searchParams}: {
    params: Promise<BaseRouterParams>,
    searchParams: Promise<Record<string, string>>
}) {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || "";
    const baseParams = await params;
    const {t: trans} = await useServerTranslation(baseParams.lang)
    const seoMeta: SeoMeta = {
        title: trans('datetime.seo.title'),
        keywords: trans('datetime.seo.keywords'),
        description: trans('datetime.seo.description'),
        lang: baseParams.lang
    }
    return <MainLayout path={pathname} params={baseParams} seoMeta={seoMeta}>
        <div className={'qrCodePage'}>
            <DatetimeComponent lang={baseParams.lang}/>
        </div>
    </MainLayout>
}
