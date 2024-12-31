/**
 * -----------------------------------------------------------------------
 *  Header      : AppHeader.tsx
 *  Created     : 27.12.2024
 *  Modified    : 27.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import R from 'res'
import { RootState } from 'store'
import { setShowMenu } from 'store/data'

import stylesConfig from './AppHeader.styles'

type AppHeaderProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const AppHeader = ({}: AppHeaderProps) => {
  const styles = useStyles(stylesConfig)
  const dispatch = useDispatch()
  const showMenu = useSelector((state: RootState) => state.app.showMenu)
  const [screenSize, setScreenSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })

  const updateDimensions = () => {
    // @ts-ignore
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    // @ts-ignore
    window.addEventListener('resize', updateDimensions)

    // @ts-ignore
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const AppLogo = () => {
    return (
      <View
        style={{
          width: 111,
          height: 90,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgb(48,64,96)'
        }}>
        <svg id="a" width="70" height="70" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476 476">
          <path
            /* eslint-disable-next-line max-len */
            d="M238,468.8c-61.65,0-119.61-24.01-163.2-67.6S7.2,299.65,7.2,238,31.21,118.39,74.8,74.8,176.35,7.2,238,7.2s119.61,24.01,163.2,67.6,67.6,101.55,67.6,163.2-24.01,119.61-67.6,163.2-101.55,67.6-163.2,67.6ZM238,8.8c-61.22,0-118.78,23.84-162.07,67.13S8.8,176.78,8.8,238s23.84,118.78,67.13,162.07c43.29,43.29,100.85,67.13,162.07,67.13s118.78-23.84,162.07-67.13c43.29-43.29,67.13-100.85,67.13-162.07s-23.84-118.78-67.13-162.07C356.78,32.64,299.22,8.8,238,8.8Z"
            fill="#fff"
            stroke-width="0"
          />
          <path
            /* eslint-disable-next-line max-len */
            d="M238,438.8c-110.72,0-200.8-90.08-200.8-200.8S127.28,37.2,238,37.2s200.8,90.08,200.8,200.8-90.08,200.8-200.8,200.8ZM238,38.8c-109.84,0-199.2,89.36-199.2,199.2s89.36,199.2,199.2,199.2,199.2-89.36,199.2-199.2S347.84,38.8,238,38.8Z"
            fill="#fff"
            stroke-width="0"
          />
          <path d="M238,349.75l-87.96-171.75.19-.36L238,6.25l87.96,171.75-.19.36-87.77,171.39ZM151.84,178l86.16,168.25,86.16-168.25L238,9.75l-86.16,168.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,319.75l-72.6-141.75.19-.36L238,36.25l72.6,141.75-.19.36-72.41,141.39ZM167.2,178l70.8,138.25,70.8-138.25L238,39.75l-70.8,138.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,289.75l-57.23-111.75.19-.36,57.05-111.39,57.23,111.75-.19.36-57.05,111.39ZM182.57,178l55.43,108.25,55.44-108.25-55.44-108.25-55.43,108.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,409.75l-57.23-111.75.19-.36,57.05-111.39,57.23,111.75-57.23,111.75ZM182.57,298l55.43,108.25,55.44-108.25-55.44-108.25-55.43,108.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,382.39l-73.94-144.39,73.94-144.39,73.94,144.39-73.94,144.39ZM168.55,238l69.45,135.61,69.45-135.61-69.45-135.61-69.45,135.61Z" fill="#fff" stroke-width="0" />
          <path d="M238,469.75l-87.96-171.75.19-.36,87.77-171.39,87.96,171.75-87.96,171.75ZM151.84,298l86.16,168.25,86.16-168.25-86.16-168.25-86.16,168.25Z" fill="#fff" stroke-width="0" />
          <path d="M238,439.75l-72.6-141.75.19-.36,72.41-141.39,72.6,141.75-72.6,141.75ZM167.2,298l70.8,138.25,70.8-138.25-70.8-138.25-70.8,138.25Z" fill="#fff" stroke-width="0" />
          <polygon points="227.76 238 238 218 248.24 238 238 258 227.76 238" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="8" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="468" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="158" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="318" r="8" fill="#fff" stroke-width="0" />
          <circle cx="75.37" cy="75.37" r="8" fill="#fff" stroke-width="0" />
          <circle cx="400.63" cy="400.63" r="8" fill="#fff" stroke-width="0" />
          <circle cx="8" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="468" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="75.37" cy="400.63" r="8" fill="#fff" stroke-width="0" />
          <circle cx="400.63" cy="75.37" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="38" r="8" fill="#fff" stroke-width="0" />
          <circle cx="238" cy="438" r="8" fill="#fff" stroke-width="0" />
          <circle cx="64.79" cy="138" r="8" fill="#fff" stroke-width="0" />
          <circle cx="411.21" cy="338" r="8" fill="#fff" stroke-width="0" />
          <circle cx="64.79" cy="338" r="8" fill="#fff" stroke-width="0" />
          <circle cx="411.21" cy="138" r="8" fill="#fff" stroke-width="0" />
          <circle cx="138" cy="64.79" r="8" fill="#fff" stroke-width="0" />
          <circle cx="338" cy="411.21" r="8" fill="#fff" stroke-width="0" />
          <circle cx="38" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="438" cy="238" r="8" fill="#fff" stroke-width="0" />
          <circle cx="138" cy="411.21" r="8" fill="#fff" stroke-width="0" />
          <circle cx="338" cy="64.79" r="8" fill="#fff" stroke-width="0" />
        </svg>
      </View>
    )
  }

  const AppTitle = ({ widthTitle, heightTitle }: any) => {
    return (
      <View
        style={{
          width: 210,
          height: 90,
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgb(48,64,96)'
        }}>
        <svg width={widthTitle} height={heightTitle} viewBox="0 0 172 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path
            /* eslint-disable-next-line max-len */
            d="M4.811 4.539H6.579L10.914 17H9.452L8.517 14.212H2.873L1.938 17H0.476L4.811 4.539ZM8.058 12.852L5.916 6.596L5.457 5.202H5.933L5.474 6.596L3.332 12.852H8.058ZM13.8197 9.911C14.5677 9.89967 15.3157 9.894 16.0637 9.894C16.891 9.88267 17.5143 9.69 17.9337 9.316C18.3643 8.942 18.5797 8.40933 18.5797 7.718C18.5797 7.16267 18.3417 6.715 17.8657 6.375C17.3897 6.02367 16.7323 5.848 15.8937 5.848C14.9757 5.848 14.2843 5.85367 13.8197 5.865V9.911ZM13.8367 15.64C15.1513 15.64 16.1373 15.6343 16.7947 15.623C17.7693 15.6117 18.455 15.4247 18.8517 15.062C19.2483 14.688 19.4467 14.144 19.4467 13.43C19.4467 13.0673 19.3277 12.7217 19.0897 12.393C18.8517 12.0643 18.5173 11.798 18.0867 11.594C17.656 11.3787 17.163 11.2653 16.6077 11.254C15.9957 11.2427 15.072 11.237 13.8367 11.237V15.64ZM12.4767 4.539C12.8393 4.52767 13.2077 4.522 13.5817 4.522C13.9557 4.522 14.3297 4.522 14.7037 4.522L15.8087 4.539C17.2367 4.56167 18.285 4.879 18.9537 5.491C19.6223 6.09167 19.9567 6.834 19.9567 7.718C19.9567 8.33 19.832 8.86267 19.5827 9.316C19.3447 9.758 19.0103 10.115 18.5797 10.387C18.9763 10.5457 19.339 10.7667 19.6677 11.05C19.9963 11.322 20.2627 11.6677 20.4667 12.087C20.682 12.5063 20.7897 12.9993 20.7897 13.566C20.7897 14.6313 20.4497 15.47 19.7697 16.082C19.101 16.6827 18.1433 16.9887 16.8967 17C15.4347 17.0227 13.967 17.0227 12.4937 17L12.4767 4.539ZM31.255 5.967H27.396V17H25.968V5.967H22.109V4.539H31.255V5.967ZM39.0004 5.678C38.1164 5.678 37.2834 5.88767 36.5014 6.307C35.7307 6.72633 35.1131 7.327 34.6484 8.109C34.1837 8.87967 33.9514 9.76933 33.9514 10.778C33.9514 11.7527 34.1724 12.6253 34.6144 13.396C35.0677 14.1667 35.6741 14.7673 36.4334 15.198C37.2041 15.6173 38.0597 15.827 39.0004 15.827C39.9411 15.827 40.7911 15.6173 41.5504 15.198C42.3211 14.7673 42.9274 14.1667 43.3694 13.396C43.8227 12.6253 44.0494 11.7527 44.0494 10.778C44.0494 9.76933 43.8171 8.87967 43.3524 8.109C42.8877 7.327 42.2644 6.72633 41.4824 6.307C40.7117 5.88767 39.8844 5.678 39.0004 5.678ZM39.0004 17.221C37.7311 17.221 36.6091 16.9377 35.6344 16.371C34.6597 15.8043 33.9061 15.0337 33.3734 14.059C32.8521 13.073 32.5914 11.9737 32.5914 10.761C32.5914 9.54833 32.8691 8.45467 33.4244 7.48C33.9797 6.494 34.7447 5.72333 35.7194 5.168C36.6941 4.60133 37.7877 4.318 39.0004 4.318C40.2131 4.318 41.3067 4.60133 42.2814 5.168C43.2561 5.72333 44.0211 6.494 44.5764 7.48C45.1317 8.45467 45.4094 9.54833 45.4094 10.761C45.4094 11.9737 45.1431 13.073 44.6104 14.059C44.0891 15.0337 43.3411 15.8043 42.3664 16.371C41.3917 16.9377 40.2697 17.221 39.0004 17.221ZM47.3578 17V4.539C48.7291 4.51633 50.0948 4.51633 51.4548 4.539C52.2141 4.55033 52.8998 4.71467 53.5118 5.032C54.1238 5.338 54.6054 5.78 54.9567 6.358C55.3194 6.92467 55.5008 7.58767 55.5008 8.347C55.5008 9.08367 55.3534 9.73533 55.0588 10.302C54.7754 10.8687 54.3334 11.3163 53.7328 11.645C53.1321 11.9623 52.3728 12.121 51.4548 12.121C51.1941 12.121 50.9334 12.121 50.6728 12.121L50.0948 10.727C50.5821 10.7497 51.0638 10.7497 51.5398 10.727C52.0838 10.7043 52.5428 10.608 52.9168 10.438C53.3021 10.268 53.5911 10.013 53.7838 9.673C53.9764 9.32167 54.0728 8.87967 54.0728 8.347C54.0728 7.62167 53.8348 7.04367 53.3588 6.613C52.8828 6.18233 52.1971 5.96133 51.3018 5.95C50.4404 5.93867 49.5791 5.93867 48.7177 5.95V17H47.3578ZM62.9141 17.221C61.7127 17.221 60.6361 16.932 59.6841 16.354C58.7434 15.776 58.0067 14.994 57.4741 14.008C56.9527 13.022 56.6921 11.934 56.6921 10.744C56.6921 9.554 56.9527 8.47167 57.4741 7.497C58.0067 6.52233 58.7434 5.75167 59.6841 5.185C60.6361 4.607 61.7127 4.318 62.9141 4.318C64.0701 4.318 65.0901 4.55033 65.9741 5.015C66.8694 5.47967 67.6401 6.15967 68.2861 7.055L67.0621 7.905C66.5974 7.225 65.9854 6.68667 65.2261 6.29C64.4667 5.882 63.6961 5.678 62.9141 5.678C62.0301 5.678 61.2141 5.90467 60.4661 6.358C59.7294 6.8 59.1457 7.40633 58.7151 8.177C58.2844 8.94767 58.0691 9.80333 58.0691 10.744C58.0691 11.6847 58.2844 12.546 58.7151 13.328C59.1457 14.0987 59.7294 14.7107 60.4661 15.164C61.2141 15.606 62.0301 15.827 62.9141 15.827C63.8207 15.827 64.6367 15.6343 65.3621 15.249C66.0987 14.8637 66.7221 14.2743 67.2321 13.481L68.3201 14.263C67.7307 15.2037 66.9771 15.9347 66.0591 16.456C65.1411 16.966 64.0927 17.221 62.9141 17.221ZM71.4781 4.539V17H70.1521V4.539H71.4781ZM77.2071 4.539H78.9581L74.0621 10.489L79.2981 17H77.5471L72.3961 10.489L77.2071 4.539ZM88.5401 4.539H90.2401L90.2231 17H88.8971V6.936L88.9141 5.746L89.2881 5.848L82.7601 17H81.0601V4.539H82.3861V14.603L82.3521 15.793L81.9951 15.691L88.5401 4.539ZM100.095 4.539H101.795L101.778 17H100.452V6.936L100.469 5.746L100.843 5.848L94.3148 17H92.6148V4.539H93.9408V14.603L93.9068 15.793L93.5498 15.691L100.095 4.539ZM94.9608 2.771C95.4481 3.23567 96.1111 3.468 96.9498 3.468C97.7885 3.468 98.4515 3.23567 98.9388 2.771C99.4261 2.30633 99.6698 1.68867 99.6698 0.917999H98.4798C98.4798 1.37133 98.3438 1.74533 98.0718 2.04C97.8111 2.33467 97.4371 2.482 96.9498 2.482C96.4625 2.482 96.0828 2.33467 95.8108 2.04C95.5501 1.74533 95.4198 1.37133 95.4198 0.917999H94.2298C94.2298 1.68867 94.4735 2.30633 94.9608 2.771ZM109.46 4.539L113.302 15.3L113.744 16.66H113.302L113.744 15.3L117.586 4.539H119.473V17H118.147L118.13 7.82L118.164 6.341L118.385 6.392L114.39 17H112.656L108.661 6.409L108.882 6.358L108.916 7.82V17H107.59L107.573 4.539H109.46ZM128.633 5.899H123.363V9.622H127.579V10.982H123.363V15.606H128.633V17H122.003V4.539H128.633V5.899ZM139.165 5.967H135.306V17H133.878V5.967H130.019V4.539H139.165V5.967ZM146.911 5.678C146.027 5.678 145.194 5.88767 144.412 6.307C143.641 6.72633 143.023 7.327 142.559 8.109C142.094 8.87967 141.862 9.76933 141.862 10.778C141.862 11.7527 142.083 12.6253 142.525 13.396C142.978 14.1667 143.584 14.7673 144.344 15.198C145.114 15.6173 145.97 15.827 146.911 15.827C147.851 15.827 148.701 15.6173 149.461 15.198C150.231 14.7673 150.838 14.1667 151.28 13.396C151.733 12.6253 151.96 11.7527 151.96 10.778C151.96 9.76933 151.727 8.87967 151.263 8.109C150.798 7.327 150.175 6.72633 149.393 6.307C148.622 5.88767 147.795 5.678 146.911 5.678ZM146.911 17.221C145.641 17.221 144.519 16.9377 143.545 16.371C142.57 15.8043 141.816 15.0337 141.284 14.059C140.762 13.073 140.502 11.9737 140.502 10.761C140.502 9.54833 140.779 8.45467 141.335 7.48C141.89 6.494 142.655 5.72333 143.63 5.168C144.604 4.60133 145.698 4.318 146.911 4.318C148.123 4.318 149.217 4.60133 150.192 5.168C151.166 5.72333 151.931 6.494 152.487 7.48C153.042 8.45467 153.32 9.54833 153.32 10.761C153.32 11.9737 153.053 13.073 152.521 14.059C151.999 15.0337 151.251 15.8043 150.277 16.371C149.302 16.9377 148.18 17.221 146.911 17.221ZM158.073 11.9C158.062 12.9653 157.897 13.8437 157.58 14.535C157.263 15.2263 156.804 15.7987 156.203 16.252L156.254 15.844L157.478 15.725H163.445V5.814H158.073C158.096 7.16267 158.096 9.19133 158.073 11.9ZM154.758 15.708H155.098C155.653 15.2773 156.061 14.7843 156.322 14.229C156.594 13.6623 156.736 12.9427 156.747 12.07C156.747 11.7073 156.753 11.4467 156.764 11.288C156.775 10.2453 156.781 9.231 156.781 8.245C156.781 7.24767 156.77 6.01233 156.747 4.539H164.771V15.725H166.624V19.04H165.298V17H156.084V19.04H154.758V15.708ZM7.973 27.899H2.703V31.622H6.919V32.982H2.703V37.606H7.973V39H1.343V26.539H7.973V27.899ZM11.263 31.911C12.011 31.8997 12.759 31.894 13.507 31.894C14.3344 31.8827 14.9577 31.69 15.377 31.316C15.8077 30.942 16.023 30.4093 16.023 29.718C16.023 29.1627 15.785 28.715 15.309 28.375C14.833 28.0237 14.1757 27.848 13.337 27.848C12.419 27.848 11.7277 27.8537 11.263 27.865V31.911ZM11.28 37.64C12.5947 37.64 13.5807 37.6343 14.238 37.623C15.2127 37.6117 15.8984 37.4247 16.295 37.062C16.6917 36.688 16.89 36.144 16.89 35.43C16.89 35.0673 16.771 34.7217 16.533 34.393C16.295 34.0643 15.9607 33.798 15.53 33.594C15.0994 33.3787 14.6064 33.2653 14.051 33.254C13.439 33.2427 12.5154 33.237 11.28 33.237V37.64ZM9.92003 26.539C10.2827 26.5277 10.651 26.522 11.025 26.522C11.399 26.522 11.773 26.522 12.147 26.522L13.252 26.539C14.68 26.5617 15.7284 26.879 16.397 27.491C17.0657 28.0917 17.4 28.834 17.4 29.718C17.4 30.33 17.2754 30.8627 17.026 31.316C16.788 31.758 16.4537 32.115 16.023 32.387C16.4197 32.5457 16.7824 32.7667 17.111 33.05C17.4397 33.322 17.706 33.6677 17.91 34.087C18.1254 34.5063 18.233 34.9993 18.233 35.566C18.233 36.6313 17.893 37.47 17.213 38.082C16.5444 38.6827 15.5867 38.9887 14.34 39C12.878 39.0227 11.4104 39.0227 9.93703 39L9.92003 26.539ZM20.1304 39V26.539H26.5564V27.899H21.4564V39H20.1304ZM35.1664 27.899H29.8964V31.622H34.1124V32.982H29.8964V37.606H35.1664V39H28.5364V26.539H35.1664V27.899ZM46.3104 39H44.9504V33.169H38.6774V39H37.3004V26.539H38.6774V31.843H44.9504L44.9334 26.539H46.3104V39ZM56.2501 26.539H57.9501L57.9331 39H56.6071V28.936L56.6241 27.746L56.9981 27.848L50.4701 39H48.7701V26.539H50.0961V36.603L50.0621 37.793L49.7051 37.691L56.2501 26.539ZM67.8048 26.539H69.5048L69.4878 39H68.1618V28.936L68.1788 27.746L68.5528 27.848L62.0248 39H60.3248V26.539H61.6508V36.603L61.6168 37.793L61.2598 37.691L67.8048 26.539ZM76.5748 26.539V39H75.2488V26.539H76.5748ZM82.3038 26.539H84.0548L79.1588 32.489L84.3948 39H82.6438L77.4928 32.489L82.3038 26.539ZM92.1918 27.678C91.3078 27.678 90.4748 27.8877 89.6928 28.307C88.9221 28.7263 88.3045 29.327 87.8398 30.109C87.3751 30.8797 87.1428 31.7693 87.1428 32.778C87.1428 33.7527 87.3638 34.6253 87.8058 35.396C88.2591 36.1667 88.8655 36.7673 89.6248 37.198C90.3955 37.6173 91.2511 37.827 92.1918 37.827C93.1325 37.827 93.9825 37.6173 94.7418 37.198C95.5125 36.7673 96.1188 36.1667 96.5608 35.396C97.0141 34.6253 97.2408 33.7527 97.2408 32.778C97.2408 31.7693 97.0085 30.8797 96.5438 30.109C96.0791 29.327 95.4558 28.7263 94.6738 28.307C93.9031 27.8877 93.0758 27.678 92.1918 27.678ZM92.1918 39.221C90.9225 39.221 89.8005 38.9377 88.8258 38.371C87.8511 37.8043 87.0975 37.0337 86.5648 36.059C86.0435 35.073 85.7828 33.9737 85.7828 32.761C85.7828 31.5483 86.0605 30.4547 86.6158 29.48C87.1711 28.494 87.9361 27.7233 88.9108 27.168C89.8855 26.6013 90.9791 26.318 92.1918 26.318C93.4045 26.318 94.4981 26.6013 95.4728 27.168C96.4475 27.7233 97.2125 28.494 97.7678 29.48C98.3231 30.4547 98.6008 31.5483 98.6008 32.761C98.6008 33.9737 98.3345 35.073 97.8018 36.059C97.2805 37.0337 96.5325 37.8043 95.5578 38.371C94.5831 38.9377 93.4611 39.221 92.1918 39.221ZM101.841 37.708H105.547V26.539H106.873V37.708H110.579V26.539H111.905V39H100.515V26.539H101.841V37.708ZM115.489 26.539V39H114.163V26.539H115.489ZM121.218 26.539H122.969L118.073 32.489L123.309 39H121.558L116.407 32.489L121.218 26.539ZM132.551 26.539H134.251L134.234 39H132.908V28.936L132.925 27.746L133.299 27.848L126.771 39H125.071V26.539H126.397V36.603L126.363 37.793L126.006 37.691L132.551 26.539ZM145.721 39H144.361V33.169H138.088V39H136.711V26.539H138.088V31.843H144.361L144.344 26.539H145.721V39ZM154.215 27.678C153.331 27.678 152.498 27.8877 151.716 28.307C150.946 28.7263 150.328 29.327 149.863 30.109C149.399 30.8797 149.166 31.7693 149.166 32.778C149.166 33.7527 149.387 34.6253 149.829 35.396C150.283 36.1667 150.889 36.7673 151.648 37.198C152.419 37.6173 153.275 37.827 154.215 37.827C155.156 37.827 156.006 37.6173 156.765 37.198C157.536 36.7673 158.142 36.1667 158.584 35.396C159.038 34.6253 159.264 33.7527 159.264 32.778C159.264 31.7693 159.032 30.8797 158.567 30.109C158.103 29.327 157.479 28.7263 156.697 28.307C155.927 27.8877 155.099 27.678 154.215 27.678ZM154.215 39.221C152.946 39.221 151.824 38.9377 150.849 38.371C149.875 37.8043 149.121 37.0337 148.588 36.059C148.067 35.073 147.806 33.9737 147.806 32.761C147.806 31.5483 148.084 30.4547 148.639 29.48C149.195 28.494 149.96 27.7233 150.934 27.168C151.909 26.6013 153.003 26.318 154.215 26.318C155.428 26.318 156.522 26.6013 157.496 27.168C158.471 27.7233 159.236 28.494 159.791 29.48C160.347 30.4547 160.624 31.5483 160.624 32.761C160.624 33.9737 160.358 35.073 159.825 36.059C159.304 37.0337 158.556 37.8043 157.581 38.371C156.607 38.9377 155.485 39.221 154.215 39.221ZM170.104 26.539H171.804L171.787 39H170.461V28.936L170.478 27.746L170.852 27.848L164.324 39H162.624V26.539H163.95V36.603L163.916 37.793L163.559 37.691L170.104 26.539ZM164.97 24.771C165.457 25.2357 166.12 25.468 166.959 25.468C167.797 25.468 168.46 25.2357 168.948 24.771C169.435 24.3063 169.679 23.6887 169.679 22.918H168.489C168.489 23.3713 168.353 23.7453 168.081 24.04C167.82 24.3347 167.446 24.482 166.959 24.482C166.471 24.482 166.092 24.3347 165.82 24.04C165.559 23.7453 165.429 23.3713 165.429 22.918H164.239C164.239 23.6887 164.482 24.3063 164.97 24.771Z"
            fill="#F6F6F6"
          />
        </svg>
      </View>
    )
  }

  const AppMenu = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 90,
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingRight: 20,
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgb(48,64,96)'
        }}>
        <TouchableOpacity onPress={() => dispatch(setShowMenu(!showMenu))}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="8" width="28" height="2" fill="white" />
            <rect x="3" y="16" width="28" height="2" fill="white" />
            <rect x="3" y="24" width="28" height="2" fill="white" />
          </svg>
        </TouchableOpacity>
      </View>
    )
  }

  if (screenSize.width < 540) {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          height: 90,
          backgroundColor: 'rgb(19,33,70)',
          flexDirection: 'row'
        }}>
        <AppLogo />
        <AppTitle widthTitle={172} heightTitle={40} />
        <AppMenu />
      </View>
    )
  }

  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: 90,
        backgroundColor: 'rgb(19,33,70)',
        flexDirection: 'row'
      }}>
      <AppLogo />
      <AppTitle widthTitle={222} heightTitle={70} />
      <AppMenu />
    </View>
  )
}

export default AppHeader
