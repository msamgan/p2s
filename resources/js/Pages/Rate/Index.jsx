import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import Actions from '@/Components/helpers/Actions.jsx'
import Name from '@/Components/helpers/Name.jsx'
import ActiveBadge from '@/Components/helpers/ActiveBadge.jsx'
import Table from '@/Components/layout/Table.jsx'
import { pageObject } from '@/Pages/Rate/helper.js'
import PageHeader from '@/Components/PageHeader.jsx'
import OffCanvas from '@/Components/off_canvas/OffCanvas.jsx'
import Form from '@/Pages/Rate/Partials/Form.jsx'
import { destroy, rates as _rates, show } from '@actions/RateController.js'
import usePermissions from '@/Hooks/usePermissions'
import EditActionButton from '@/Components/EditActionButton.jsx'
import DeleteActionButton from '@/Components/DeleteActionButton.jsx'
import CreateActionButton from '@/Components/CreateActionButton.jsx'

export default function Index() {
    const { can } = usePermissions()

    const [rates, setRates] = useState([])
    const [data, setData] = useState([])
    const [rate, setRate] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))

    const getRates = async () => setRates(await _rates.data({}))

    const getRate = async (id) => setRate(await show.data({ params: { rate: id } }))

    const editRate = (rate) => {
        getRate(rate.id).then()
        setPageData(pageObject(rate))
    }

    const processRate = (rate) => {
        return {
            country: <Name value={rate.country_code} />,
            weight: rate.weight,
            weightUnit: rate.weight_unit,
            baseRate: rate.base_rate,
            markupValue: rate.markup_value,
            markupType: rate.markup_type,
            markup: rate.markup,
            surcharges: rate.surcharges,
            rate: rate.rate,
            currency: rate.currency,
        }
    }

    useEffect(() => {
        if (can(permissions.rate.list)) {
            getRates()
                .then()
                .finally(() => setLoading(false))
        }
    }, [])

    useEffect(() => {
        setData(rates.map((rate) => processRate(rate)))
    }, [rates])

    return (
        <Master>
            <Head title="Rate" />

            <PageHeader
                title={'Rates'}
                subtitle={'Find all of your business’s Rate and there associated details.'}
                action={
                    <CreateActionButton
                        module={'rate'}
                        onClick={() => {
                            setRate(null)
                            setPageData(pageObject(null))
                        }}
                    />
                }
            ></PageHeader>

            {can([permissions.rate.view, permissions.rate.update, permissions.rate.create]) && (
                <OffCanvas id="rateFormCanvas" title={pageData.title}>
                    <Form getRates={getRates} rate={rate} />
                </OffCanvas>
            )}

            <div className="col-12">
                <Table data={data} loading={loading} permission={can(permissions.rate.list)} />
            </div>
        </Master>
    )
}
