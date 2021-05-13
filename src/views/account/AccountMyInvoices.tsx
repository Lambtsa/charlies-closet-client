import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../hooks/UserContext';
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

/*
  Components
*/
import AccountNavigation from '../../components/AccountNavigation';
import Loader from '../../components/validation/Loader';
import SnackBar from '../../components/validation/SnackBar';

const AccountMyInvoices = () => {
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.token);
  const [invoices, setInvoices] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/payments/invoices', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    }).then(response => response.json())
      .then(data => {
        setInvoices(data);
        setIsLoading(false);
      })
      .catch(() => setError(true));
  })

  const formatDate = (date: any) => {
    const paidDate = new Date(date)
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return paidDate.toLocaleDateString('fr-FR', options);
  }

  if (!user.onboardingProgress.finished) {
    return (
      <Redirect push to={user.onboardingProgress.step} />
    )
  }

  return (
    <>
      <AccountNavigation >
        <div className="invoices__container">
          <h1 className="form__title">Mes factures</h1>
          {error && <SnackBar state={error} setState={setError} message="There has been an error getting your invoices" type="error" />}
          {isLoading && <Loader />}
          {!isLoading && invoices.map((invoice: any) => (
            <a key={invoice.id} href={invoice.invoice_pdf} className="invoice">
              <div className="invoice__contents">
                <h3 className="invoice__title">Facture</h3>
                <p className="invoice__number">Invoice number</p>
              </div>
              <p className="invoice__subtitle paid-date">{formatDate(invoice.paid_at)}</p>
              <p className="invoice__subtitle price">{`${(invoice.amount_paid)/100} €`}</p>
              <p className="invoice__subtitle status">{invoice.status}</p>
              <FontAwesomeIcon className="invoice__icon" icon={faFilePdf} />
            </a>
          ))}
        </div>
      </AccountNavigation>
    </>
  );
};

export default AccountMyInvoices;
